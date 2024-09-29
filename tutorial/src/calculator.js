import {
    Center,
    HStack,
    VStack,
    Divider,
    Button,
    Text,
    Input
  } from '@chakra-ui/react'
  import { useState } from 'react'
  
  const Calculator = () => {
    const [display, setDisplay] = useState('0')
    const [leftOperand, setLeftOperand] = useState('')
    const [rightOperand, setRightOperand] = useState('')
    const [operand, setOperand] = useState('')
  
    const handleNumPad = event => {
      const pushedNumPad = event.target.value
      // setDisplay(pushedNumPad)
  
      const calculate = (leftOpr, rightOpr, opr) => {
        switch (opr) {
          case '+':
            return Number(leftOpr) + Number(rightOpr)
          case '-':
            return Number(leftOpr) - Number(rightOpr)
          case '*':
            return Number(leftOpr) * Number(rightOpr)
          case '/':
            return Number(leftOpr) / Number(rightOpr)
        }
      }
  
      switch (pushedNumPad) {
        // + - * / 左被演算子の入力が終了
        case '+':
        case '-':
        case '*':
        case '/': {
          // 左被演算子が入力されていて、右被演算子は空の時に演算子は押せる
          if (leftOperand !== '' && rightOperand === '') {
            setOperand(pushedNumPad)
          }
          break
        }
        // = 計算を行う
        case '=': {
          const result = calculate(leftOperand, rightOperand, operand)
          setDisplay(result)
          setLeftOperand(result)
          setRightOperand('')
          setOperand('=')
          break
        }
        // C初期化する。左被演算子、右被演算子、演算子のリセット
        case 'c': {
          setDisplay('0')
          setLeftOperand('')
          setRightOperand('')
          setOperand('')
          break
        }
        // 数字が押されたとき
        default: {
          // 左被演算子の入力
          if (operand === '' || operand === '=') {
            const left =
              leftOperand === '' || operand === '='
                ? pushedNumPad
                : leftOperand + pushedNumPad
            setOperand('')
            setDisplay(left)
            setLeftOperand(left)
          } else {
            const right = rightOperand + pushedNumPad
            setDisplay(right)
            setRightOperand(right)
          }
        }
      }
    }
  
    return (
      <>
        <Center>
          <VStack>
            <Text>
              精度もはっきりせず、不器用な電卓ですが日々努力しています。
            </Text>
            <VStack w='250px' p='20px' bg='blue.300' borderRadius='10px'>
              <Text>日々之精進電卓</Text>
              <Input
                value={display}
                readOnly
                w='200px'
                textAlign='right'
                fontSize='24px'
                color='green.800'
                bg='green.300'
              />
              <HStack>
                <Input
                  value={leftOperand}
                  readOnly
                  w='60px'
                  h='18px'
                  textAlign='right'
                  fontSize='12px'
                  color='green.800'
                  bg='green.300'
                />
                <Input
                  value={operand}
                  readOnly
                  w='60px'
                  h='18px'
                  textAlign='right'
                  fontSize='12px'
                  color='green.800'
                  bg='green.300'
                />
                <Input
                  value={rightOperand}
                  readOnly
                  w='60px'
                  h='18px'
                  textAlign='right'
                  fontSize='12px'
                  color='green.800'
                  bg='green.300'
                />
              </HStack>
              <Divider borderWidth='3px' borderRadius='5px' />
              <HStack>
                <Button onClick={handleNumPad} value='1'>
                  1
                </Button>
                <Button onClick={handleNumPad} value='2'>
                  2
                </Button>
                <Button onClick={handleNumPad} value='3'>
                  3
                </Button>
                <Button onClick={handleNumPad} value='+' bg='red.400'>
                  +
                </Button>
              </HStack>
              <HStack>
                <Button onClick={handleNumPad} value='4'>
                  4
                </Button>
                <Button onClick={handleNumPad} value='5'>
                  5
                </Button>
                <Button onClick={handleNumPad} value='6'>
                  6
                </Button>
                <Button onClick={handleNumPad} value='-' bg='red.400'>
                  -
                </Button>
              </HStack>
              <HStack>
                <Button onClick={handleNumPad} value='7'>
                  7
                </Button>
                <Button onClick={handleNumPad} value='8'>
                  8
                </Button>
                <Button onClick={handleNumPad} value='9'>
                  9
                </Button>
                <Button onClick={handleNumPad} value='*' bg='red.400'>
                  *
                </Button>
              </HStack>
              <HStack>
                <Button onClick={handleNumPad} value='0'>
                  0
                </Button>
                <Button onClick={handleNumPad} value='='>
                  =
                </Button>
                <Button onClick={handleNumPad} value='c' bg='yellow.400'>
                  C
                </Button>
                <Button onClick={handleNumPad} value='/' bg='red.400'>
                  /
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Center>
      </>
    )
  }
  
  const App = () => {
    return <Calculator />
  }
  
  export default App
  