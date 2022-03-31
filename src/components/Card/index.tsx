import { DataSearchResult } from "../../data/types";
import { CardBody, CardHeader, CardRelevance, StyledCard } from "./styles";

const Card = ({data}: { data: DataSearchResult }) => {

    return <StyledCard offset={Math.random()*100}>
        <CardHeader>{data.title}</CardHeader>
        <CardBody dangerouslySetInnerHTML={{__html: data.body}} />
        <CardRelevance>(Relevance: {data.score.toFixed(2)})</CardRelevance>
    </StyledCard>
}

export default Card;