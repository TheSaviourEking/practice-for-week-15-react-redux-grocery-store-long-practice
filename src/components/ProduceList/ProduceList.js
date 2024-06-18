import { useSelector } from 'react-redux';

import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { getAllProduce } from '../../store/produce';

function ProduceList() {
  // const produce = {};
  // const produce = useSelector(state => state.produce);

  // const produceArr = Object.values(produce);
  const produceArr = useSelector(getAllProduce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
