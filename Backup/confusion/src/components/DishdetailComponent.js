import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { DISHES } from './../shared/dishes.js';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: null
        }

        this.state = {
            dishes: DISHES
          };
    }

    dateFormat(datestring) {
        var split = datestring.split("-")
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"]
        const year = split[0]
        const month = months[parseInt(split[1]) - 1]
        const day = split[2].split("T")[0]

        return month + " " + day + ", " + year
    }

    renderComments(commentArray) {        
        if (commentArray != null) {
            const commentsDisplay = commentArray.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {this.dateFormat(comment.date)}
                        </p>
                    </div>
                );
            });

            return(
                
                <div>
                    <h4>Comments</h4>
                    {commentsDisplay}
                </div>
            );

        } else {
            return(
                <div></div>
            );
        }
    }

    renderDish(dish) {
        return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
        )
    }

    render() {
        const dish = this.props.dish
        if (dish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;