'use client'

import { useEffect, useState } from 'react'
import api from '../../services/api'
import Image from 'next/image'

interface AdviceProps {
  id: number
  advice: string
}

export default function Home() {
  const [data, setData] = useState<AdviceProps | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await api.get('/advice')

      if (!response) return

      setData(response.data.slip)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='w-full h-full p-4 flex flex-col justify-center items-center'>
      <div className='bg-[#323a49] relative flex flex-col text-center p-6 pb-16 rounded-2xl gap-4 items-center md:w-1/2 xl:min-w-1/3 xl:min-h-1/3 xl:justify-around '>
        <p className='text-[#52ffa8] text-sm font-medium tracking-[0.2em]'>
          {data ? `ADVICE #${data.id}` : 'ADVICE'}
        </p>
        {data && (
          <h1 className='font-semibold text-[28px] font-mono'>
            {`"${data.advice}"`}
          </h1>
        )}
        <Image
          src='/pattern-divider-mobile.svg'
          width={0}
          height={0}
          className='h-auto w-full'
          alt='divider'
        />
        <button
          className='absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-[#52ffa8] hover:shadow-[0_0_40px_-6px] shadow-[#52ffa8] w-16 h-auto aspect-square rounded-full flex items-center justify-center p-5 active:scale-90 duration-200'
          onClick={() => fetchData()}
        >
          <Image
            src='/icon-dice.svg'
            width={0}
            height={0}
            className='aspect-square w-full h-auto'
            alt='dice'
          />
        </button>
      </div>
    </main>
  )
}
