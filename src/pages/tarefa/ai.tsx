import { Input, Checkbox, Button, Divider, Heading, Text, Flex, Center} from '@chakra-ui/react'

export default function Tarefa(){
    return(
        <>
        <Heading>Lista de Tarefas</Heading>
        <Divider />
        
        <h2>Inserir nova tarefa</h2>
        <Flex>
        <Input placeholder = 'Digite a tarefa aqui' /> 
        <Checkbox>Realizada?</Checkbox><br />
        <Button>Inserir</Button>
        </Flex> 
        <Divider />
         <Flex> 
            <Center bg='grey'>
        <Text>Tarefa 1</Text>
            </Center> 
        </Flex> 
        
        </>
    )
}
