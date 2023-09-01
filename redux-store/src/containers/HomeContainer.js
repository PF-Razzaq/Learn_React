import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../services/Actions/action";

const mapDispatchToProps = (dispatch) => ({
  addCartHandler: (data) => dispatch(addToCart(data)),
});

const mapStateToProps = (state) => ({
  cardData: state,
});

export default connect(mapDispatchToProps, mapStateToProps)(Home);
// export default Home;
