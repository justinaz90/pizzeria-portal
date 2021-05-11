import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchTableStatusAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTableStatus: (id, newStatus) => dispatch(fetchTableStatusAPI(id, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
