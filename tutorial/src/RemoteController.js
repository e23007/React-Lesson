import { useState, useEffect } from 'react'
import {
  Center,
  VStack,
  HStack,
  Button,
  Box,
  Heading,
  Text,
  Divider
} from '@chakra-ui/react'

const Mode = ({ mode }) => {
  return (
    <>
      <HStack>
        <Heading as='h2' fontSize='18px' fontWeight='normal'>
          運転：
        </Heading>
        <Box
          fontSize='18px'
          color={mode === '冷房' ? 'green.500' : 'green.200'}
        >
          冷房
        </Box>
        <Box
          fontSize='18px'
          color={mode === '除湿' ? 'green.500' : 'green.200'}
        >
          除湿
        </Box>
        <Box
          fontSize='18px'
          color={mode === '暖房' ? 'green.500' : 'green.200'}
        >
          暖房
        </Box>
      </HStack>
    </>
  )
}

const Thermostat = ({ temp, mode }) => {
  return (
    <>
      <HStack>
        <Heading as='h2' fontSize='18px' fontWeight='normal'>
          設定温度:
        </Heading>
        <Text color={mode !== '停止' ? 'green.500' : 'green.200'}>{temp}</Text>
      </HStack>
    </>
  )
}

const DigitalClock = () => {
  const [time, setTime] = useState()
  useEffect(() => {
    const updateClock = now => {
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const s = now.getSeconds().toString().padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }

    const timer = setInterval(() => {
      updateClock(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <VStack>
        <Heading as='h2' fontSize='18px' fontWeight='normal'>
          時刻：
        </Heading>
        <Text>{time}</Text>
      </VStack>
    </>
  )
}

const Display = ({ temp, mode }) => {
  return (
    <>
      <VStack
        w='250'
        bg='green.100'
        borderRadius='10px'
        p='1em'
        color='green.500'
      >
        <Mode mode={mode} />
        {/* 運転モード */}
        <Divider borderWidth='1px' borderColor='green.500' />
        <Thermostat temp={temp} mode={mode} />
        {/* 温度設定 */}
        <Divider borderWidth='1px' borderColor='green.500' />
        <DigitalClock />
        {/* 時計 */}
      </VStack>
    </>
  )
}
const Control = ({ handleControl }) => {
  return (
    <>
      <VStack>
        <Heading as='h2' fontSize='14px' fontWeight='normal'>
          温度
        </Heading>
        <HStack>
          <Button onClick={handleControl} value='up' color='gray.300'>
            Up
          </Button>
          <Button onClick={handleControl} value='dn' color='gray.300'>
            Dn
          </Button>
        </HStack>
        <Heading as='h2' fontSize='14px' fontWeight='normal'>
          運転
        </Heading>
        <HStack>
          <Button onClick={handleControl} value='冷房' bg='blue.100'>
            冷房
          </Button>
          <Button onClick={handleControl} value='除湿' bg='green.100'>
            除湿
          </Button>
          <Button onClick={handleControl} value='暖房' bg='red.100'>
            暖房
          </Button>
          <Button onClick={handleControl} value='停止' bg='yellow.100'>
            停止
          </Button>
        </HStack>
      </VStack>
    </>
  )
}
const Remote = () => {
  const [mode, setMode] = useState('停止')
  const [temp, setTemp] = useState(20)
  const handleControl = event => {
    const operation = event.target.value
    if (operation === 'up' && mode !== '停止') setTemp(temp + 1)
    else if (operation === 'dn' && mode !== '停止') setTemp(temp - 1)
    else if (
      operation === '冷房' ||
      operation === '除湿' ||
      operation === '暖房' ||
      operation === '停止'
    ) {
      setMode(operation)
    }
  }
  return (
    <>
      <Center>
        <VStack
          bg='gray.100'
          p='1em'
          margin='1em'
          borderRadius='10px'
          borderWidth='1px'
          borderColor='gray.300'
        >
          <Heading as='h1' fontSize='20px' fontWeight='normal'>
            爽快空調
          </Heading>
          {/* タイトル、ロゴ、メーカー名 */}
          <Display temp={temp} mode={mode} />
          {/* // ディスプレイ */}
          <Divider />
          <Control handleControl={handleControl} />
          {/* // コントロール部 */}
        </VStack>
      </Center>
    </>
  )
}

const App =()=>{
  return (
    <>
      <Remote />
    </>
  )
}

export default App
