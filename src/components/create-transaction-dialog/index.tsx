import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container, Content, CurrencyInput, 
    InputGroup, RadioForm, RadioGroup } from "./styles";
import { InputMask } from "@react-input/mask";

export function CreateTransactionDialog() {
    const [open, setOpen] = useState(false)

    const handleClose = useCallback(()=> {
        setOpen(false)
    }, [])

    const onSubmit = useCallback(()=> {
        handleClose()
    }, [handleClose])

    return (
        <Dialog 
        open={open} 
        onOpenChange={setOpen} 
        trigger={<Button>Nova Transação</Button>}
        >
            <Container>
                
                <Title
                    title="Nova Transação"
                    subtitle="Crie uma nova transação para o seu controle financeiro"
                />                    
            
                <form>
                    <Content>
                        <InputGroup>
                            <label>Categoria</label>
                            <select>
                                <option value='null'>Selecione uma categoria...</option>
                            </select>
                        </InputGroup>
                        <Input 
                        style={{width: '90%'}} 
                        label="Nome" 
                        placeholder="Nome da transação..."
                        />
                        <InputGroup>
                            <label>Valor</label>  
                            <CurrencyInput 
                            placeholder='R$0,00' 
                            format='currency' 
                            currency='BRL'
                            />
                        </InputGroup>
                        <InputMask
                        style={{width: '90%'}}
                        component={Input}
                        mask='dd/mm/aaaa'
                        replacement={{d: /\d/, m: /\d/,a: /\d/}}
                        label="Data"
                        variant="black"
                        placeholder="dd/mm/aaaa"
                        />                      
                        
                        <RadioForm>
                            <RadioGroup>
                                <input 
                                type='radio' 
                                id='income' 
                                value='income' 
                                name='type'/>
                                <label 
                                htmlFor='income'>Receita</label>
                            </RadioGroup>
                            <RadioGroup>
                                <input 
                                type='radio' 
                                id='expense' 
                                value='expense' 
                                name='type'/>
                                <label htmlFor='expense'>Gasto</label>
                            </RadioGroup>
                        </RadioForm>
                    </Content>

                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">
                            Cancelar
                        </Button>                        
                        <Button onClick={onSubmit} type="button">
                            Cadastrar
                        </Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )

}