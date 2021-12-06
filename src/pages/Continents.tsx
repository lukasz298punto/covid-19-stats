import { useGlobalState } from 'constants/globalState';

function Continents() {
    const [range] = useGlobalState('dateRangeType');

    return <div>{range}</div>;
}

export default Continents;
