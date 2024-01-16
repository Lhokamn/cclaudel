import ParcoursScolSection from '@/app/components/parcours/parcours.component'
import { q } from '@/app/data/parcours.data'

export default function Parcours() {
    return (
        <main>
            <div>
                <h1>parcours</h1>
                <ParcoursScolSection experiences={q} ></ParcoursScolSection>
            </div>
        </main>
    )
}