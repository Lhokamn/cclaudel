import ParcoursScolSection from '@/app/components/parcoursScol/parcoursScol.component'
import { scol } from '@/app/data/parcoursScol.data'

export default function Parcours() {
    return (
        <main>
            <div>
                <h1>Parcours</h1>
                <h2>Scolaire</h2>
                <ParcoursScolSection experiences={scol} ></ParcoursScolSection>
                <h2>Professionel</h2>
            </div>
        </main>
    )
}