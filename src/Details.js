import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modals";

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true, showModal: false  };
    }
    
    // state = { loading: true, showModal: false }             //////// when babel used only this line equals to constructor

    async componentDidMount() {
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
        );
        const json = await res.json();

        this.setState({loading: false, ...json.pets[0] });
        //// this.setState(Object.assign({ loading: false }, json.pets[0]));    same as above
    }

    toggleModal = () => this.setState( { showModal: !this.state.showModal })

    render() {
        if (this.state.loading) {
            return <h2>loading...</h2>;
        }

        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {city}, {state}
                    </h2>
                    <ThemeContext.Consumer>
                        {
                            ([theme]) => (
                                <button 
                                onClick={this.toggleModal}
                                style={{backgroundColor: theme}}>
                                    Adopt {name}
                                </button>
                            )
                        }
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className="buttons">
                                    <a href="https://bit.ly/pet-adopt">Yes</a>
                                    <button onClick={this.toggleModal}>No</button>
                                </div>   
                            </div>
                        </Modal>
                       ) : null}
                </div>
            </div>
        );
    }
}

const WrappedDetails = () => {
    const params = useParams();
    return (
        <ErrorBoundary>
            <Details params={params} />
        </ErrorBoundary>
    );
};

export default WrappedDetails;