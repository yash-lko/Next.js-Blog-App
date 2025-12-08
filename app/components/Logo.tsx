
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image 
        src="/images/logo.png"
        width={110}
        height={100}
        alt="Logo"
        style={{position:'absolute', top:'0.4vw'}}
      />
    </div>
  )
}

export default Logo