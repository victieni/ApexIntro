import { ZodiacCancer } from 'lucide-react'
import React from 'react'

export default function Wall() {
  return (
    <div className="h-sreen flex items-center justify-center">

      <p className="font-semibold text-3xl sm:text-5xl md:text-7xl " >
        <ZodiacCancer />
        <span>
          ApexIntro
        </span>
      </p>
    </div>
  )
}
