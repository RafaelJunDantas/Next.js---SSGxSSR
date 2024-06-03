import Link from "next/link";
import delay from "../src/utils/delay";

export async function getServerSideProps(context){

    await delay(2)

    const mensagem = "Fui renderizada para esta requisição!";

    return{
        props: {
            mensagem,
        }
    }
}

export default function SSRPage({mensagem}){
    return(
        <div>
            <h1>SSR Page</h1>
            {mensagem}
            <br/>
            <br/>
            <Link href="/">Voltar para Home</Link>
        </div>
    )
}