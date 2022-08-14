import {Htag} from "../components";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className="os">
			<Htag tag="h1">Текст</Htag>
			<Button
				appearance="primary"
				onClick={()=> console.log('ok')
				}>
				Кнопка</Button>
			<Button appearance="ghost" arrow="right">Кнопка 2</Button>
    </div>
  )
}
