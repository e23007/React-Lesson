import { Center, VStack, HStack, Box, Text, Heading } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
const DigitalClock = ({ location, timeDiff }) => {
  const [time, setTime] = useState('00:00:00')
  const [date, setDate] = useState('MM/DD(day)/YYYY')
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
    const updateClock = () => {
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const date = now.getDate().toString().padStart(2, '0')
      const day = now.getDay()
      const year = now.getFullYear().toString()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const s = now.getSeconds().toString().padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
      setDate(`${month}/${date}(${daysOfWeek[day]}):${year}`)
    }
    const JST = new Date()
    const tick = () =>
      setNow(new Date(JST.getTime() + Number(timeDiff) * 60 * 60 * 1000))
    updateClock()
    const timer = setInterval(tick, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [now])
  return (
    <>
      <Center>
        <VStack bg='gray.600' w='250px' p='10px' m='10px' borderRadius='10px'>
          <Heading as='h1' fontSize='24px'>
            {location}
          </Heading>
          <Box bg='green.600' w='220px' h='80px' borderRadius='10px'>
            <Text fontSize='48px' textAlign='center' color='green.300'>
              {time}
            </Text>
          </Box>
          <Box bg='green.600' w='220px' h='40px' borderRadius='10px'>
            <Text fontSize='24px' textAlign='center' color='green.300'>
              {date}
            </Text>
          </Box>
        </VStack>
      </Center>
    </>
  )
}
const App = () => {
  return (
    <>
      <HStack>
        <DigitalClock location='日本' timeDiff='0' />
        <DigitalClock location='ハワイ' timeDiff='-19' />
        <DigitalClock location='ロスアンジェルス' timeDiff='-17' />
      </HStack>
      <HStack>
        <DigitalClock location='ニューヨーク' timeDiff='-14' />
        <DigitalClock location='ロンドン' timeDiff='-9' />
        <DigitalClock location='シドニー' timeDiff='1' />
      </HStack>
    </>
  )
}

export default App
