import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../Pagination";

export { Box } from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx-auto="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justifyContent="space-between" alignItems="center">
               <Heading size="lg" fontWeight="normal">
                  Usuários
               </Heading>
               <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
               >
                  Criar novo
               </Button>
            </Flex>

            <Table colorScheme="whiteAlpha">
               <Thead>
                  <Tr>
                     <Th px="6" color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                     </Th>
                     <Th>Usuários</Th>
                     <Th>Data de cadastro</Th>
                     <Th width="8"></Th>
                  </Tr>
               </Thead>
               <Tbody>
                  <Tr>
                     <Td px="6">
                        <Checkbox colorScheme="pink" />
                     </Td>
                     <Td>
                        <Box>
                           <Text fontWeight="bold">Vitor Cavalcanti</Text>
                           <Text fontSize="sm" color="gray.300">vitor@taksibrasil.com</Text>
                        </Box>
                     </Td>
                     <Td>30 de Julho, 2022</Td>
                     <Td>
                        <Button
                           as="a"
                           size="sm"
                           fontSize="sm"
                           colorScheme="purple"
                           leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                           Editar
                        </Button>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td px="6">
                        <Checkbox colorScheme="pink" />
                     </Td>
                     <Td>
                        <Box>
                           <Text fontWeight="bold">Vitor Cavalcanti</Text>
                           <Text fontSize="sm" color="gray.300">vitor@taksibrasil.com</Text>
                        </Box>
                     </Td>
                     <Td>30 de Julho, 2022</Td>
                     <Td>
                        <Button
                           as="a"
                           size="sm"
                           fontSize="sm"
                           colorScheme="purple"
                           leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                           Editar
                        </Button>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td px="6">
                        <Checkbox colorScheme="pink" />
                     </Td>
                     <Td>
                        <Box>
                           <Text fontWeight="bold">Vitor Cavalcanti</Text>
                           <Text fontSize="sm" color="gray.300">vitor@taksibrasil.com</Text>
                        </Box>
                     </Td>
                     <Td>30 de Julho, 2022</Td>
                     <Td>
                        <Button
                           as="a"
                           size="sm"
                           fontSize="sm"
                           colorScheme="purple"
                           leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                           Editar
                        </Button>
                     </Td>
                  </Tr>
               </Tbody>
            </Table>

            <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
