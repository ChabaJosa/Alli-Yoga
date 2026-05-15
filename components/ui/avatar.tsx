"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type AvatarImageStatus = "idle" | "loaded" | "error"

type AvatarContextValue = {
  imageStatus: AvatarImageStatus
  setImageStatus: React.Dispatch<React.SetStateAction<AvatarImageStatus>>
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null)

function useAvatarContext(component: string): AvatarContextValue {
  const ctx = React.useContext(AvatarContext)
  if (!ctx) {
    throw new Error(`${component} must be used within \`Avatar\`.`)
  }
  return ctx
}

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span"> & {
    size?: "default" | "sm" | "lg"
  }
>(function Avatar({ className, size = "default", ...props }, ref) {
  const [imageStatus, setImageStatus] = React.useState<AvatarImageStatus>("idle")

  const value = React.useMemo(
    () => ({ imageStatus, setImageStatus }),
    [imageStatus],
  )

  return (
    <AvatarContext.Provider value={value}>
      <span
        ref={ref}
        data-slot="avatar"
        data-size={size}
        className={cn(
          "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
          className,
        )}
        {...props}
      />
    </AvatarContext.Provider>
  )
})

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentProps<"img">
>(function AvatarImage({ className, src, onLoad, onError, ...props }, ref) {
  const { setImageStatus } = useAvatarContext("AvatarImage")

  React.useLayoutEffect(() => {
    setImageStatus("idle")
  }, [src, setImageStatus])

  return (
    <img
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "pointer-events-none absolute inset-0 z-10 size-full object-cover",
        className,
      )}
      {...props}
      src={src}
      onLoad={(event) => {
        setImageStatus("loaded")
        onLoad?.(event)
      }}
      onError={(event) => {
        setImageStatus("error")
        onError?.(event)
      }}
    />
  )
})

function AvatarFallback({
  className,
  delayMs,
  ...props
}: React.ComponentProps<"span"> & {
  delayMs?: number
}) {
  const { imageStatus } = useAvatarContext("AvatarFallback")
  const [canRender, setCanRender] = React.useState(delayMs === undefined)

  React.useEffect(() => {
    if (delayMs === undefined) return
    const timerId = window.setTimeout(() => setCanRender(true), delayMs)
    return () => window.clearTimeout(timerId)
  }, [delayMs])

  if (imageStatus === "loaded" || !canRender) {
    return null
  }

  return (
    <span
      data-slot="avatar-fallback"
      className={cn(
        "absolute inset-0 z-20 flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className,
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-30 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className,
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className,
      )}
      {...props}
    />
  )
}

Avatar.displayName = "Avatar"
AvatarImage.displayName = "AvatarImage"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
