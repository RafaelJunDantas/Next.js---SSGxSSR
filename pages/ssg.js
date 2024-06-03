import Link from "next/link";
import delay from "../src/utils/delay";

export async function getStaticProps(context){

    await delay(2)

    const mensagem = "Fui gerada durante o build!";

    return{
        props: {
            mensagem,
        }
    }
}

export default function SSGPage({mensagem}){
    return(
        <div>
            <h1>SSG Page</h1>
            {mensagem}
            <br/>
            <br/>
            <Link href="/">Voltar para Home</Link>
        </div>
    )
}