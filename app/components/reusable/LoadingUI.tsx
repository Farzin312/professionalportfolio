import React from 'react';

export default function LoadingUI() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-yellow-300">
      <div
        className="
          animate-spin
          rounded-full
          h-16 w-16
          border-4
          border-yellow-500
          border-t-transparent
        "
      />
    </div>
  )
}
