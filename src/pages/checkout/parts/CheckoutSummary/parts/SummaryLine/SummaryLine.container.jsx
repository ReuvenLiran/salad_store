import { connect } from 'react-redux';
import {
  sumPriceItemsToCheckout,
} from 'utils';
import SummaryLine from './SummaryLine';

const mapStateToProps = state => ({
  sum: sumPriceItemsToCheckout(state),
});

export default connect(mapStateToProps, null)(SummaryLine);
