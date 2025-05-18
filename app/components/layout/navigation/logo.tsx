import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import logoImage from '@/assets/images/logo.svg'

function logo() {
  return (
    <Link href="/" legacyBehavior>
      <a className="px-layout mb-10 block">
        <Image
          src={logoImage}
          width={247}
          height={32}
          alt="Online cinema"
          draggable={false}
        />
      </a>
    </Link>
  )
}

export default logo
