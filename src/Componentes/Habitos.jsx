import HabitCard from "../../components/HabitCard/HabitCard"
import plusIcon from "../../assets/plus.svg"
import StyledSubtitle from "../../components/StyledSubtitle"
import apiHabits from "../../services/apiHabits"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import { ProgressContext } from "../../contexts/ProgressContext"
import apiToday from "../../services/apiToday"
import CriarHabito from "./CriarHabito"

export default function HabitsPage() {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [createHabitOpened, setCreateHabitOpened] = useState(false)
    const { user } = useContext(UserContext)
    const { setProgress } = useContext(ProgressContext)

    useEffect(getHabitsList, [])

    function getTodaysHabits() {
        apiToday.getToday(user.token)
            .then(res => {
                const apiHabits = res.data
                const doneHabits = apiHabits.filter(h => h.done === true)
                const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0)
                setProgress(calc)
            })
            .catch(err => alert(err.response.data.message))
    }

    function getHabitsList() {
        apiHabits.getHabits(user.token)
            .then(res => {
                setIsLoading(false)
                setHabits(res.data)
                getTodaysHabits()
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }
    return (
        <ContainerGeral>

            <BarraADDHabito>
                <MeusHabitosText>Meus hábitos</MeusHabitosText>
                <BotaoADDHabito onClick={() => setCreateHabitOpened(!createHabitOpened)}>
                    <img src={plusIcon} alt="Ícone Adicionar" />
                </BotaoADDHabito>
            </BarraADDHabito>

            <CriarHabito
                isOpened={createHabitOpened}
                setIsOpened={setCreateHabitOpened}
                getHabitsList={getHabitsList}
            />

            {isLoading ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (
                habits.length === 0 ? (
                    <StyledSubtitle>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </StyledSubtitle>
                ) : (
                    habits.map(h => (
                        <HabitCard
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            days={h.days}
                            getHabitsList={getHabitsList}
                        />
                    ))
                )
            )}
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 527px;
background: #F2F2F2;
`
const FotoPerfil = styled.image`
width: 51px; 
height: 51px;
background: url(image.png);
border-radius: 98.5px;
`
const BarraADDHabito = styled.div`
display: flex;
align-items: center;
width: 375px;
height: 29px;
padding-top: 25px;
padding-bottom: 25px;
`
const MeusHabitosText = styled.h2`
padding-left: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const BotaoADDHabito = styled.button`
width: 40px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
margin-left: 145px ;
color: #FFFFFF;
`
const ParagrafotH3 = styled.h3`
width: 338px;
height: 74px;
padding-left: 18px;
padding-top: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`


