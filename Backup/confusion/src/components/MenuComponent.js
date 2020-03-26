import React, {Component}  from 'react';
import {Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) { 
        super(props);

        this.state = { 
            selectedDish:null
        }
        console.log('Menu Component Constructor is Invoked');
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is Invoked');
    }

    onDishSelect(dish) {
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if (dish !=null) { 
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>   
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle> 
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComment(dish){
        if(dish != null) {
            const dishComments = dish.comments.map((comment) => {
                return (
                
                 <ul class = "list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} {comment.date.substr(0, 10)}</li>

                </ul>
                );
            })
            return(
                <div>
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            );
        } else {
            return(
                <div></div>  
            );
        }
                 
    }


    render() {
        
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>   
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle> 
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        console.log('Menu Component Render is Invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        );
    }
}


export default Menu;