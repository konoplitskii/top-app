import {Htag, P} from "../components";
import Button from "../components/Button/Button";
import {Tag} from "../components/Tag/Tag";

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
			<P size="l">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur consequuntur culpa, distinctio fugit impedit minima molestiae nostrum praesentium recusandae reiciendis reprehenderit rerum saepe velit voluptatum? Debitis doloremque impedit soluta.
			</P>
			<Tag color="primary" size="m">sds</Tag>
			<Tag color="red" size="m">sds</Tag>
			<Tag color="green" size="s">sds</Tag>
			<Tag color="grey" size="m">sds</Tag>
    </div>
  )
}
