import PortfolioBlock from '../PortfolioBlock/PortfolioBlock';
import {Blocks} from '../PortfolioComponents/PortfolioComponents';
import {useSelector} from 'react-redux';

const PortfolioBlocks = () => {
    const blocks = useSelector(state => state.projects);
    return ( 
        <Blocks>
            {(blocks.map((block, id) => {
                return (
                    <PortfolioBlock
                        item={block}
                        key={id}
                    />
                )
            }))}
        </Blocks>
     );
}
 
export default PortfolioBlocks;