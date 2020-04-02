import React  from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';

    function RenderMenuItem({ dish, onClick }){
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>   
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle> 
                </CardImgOverlay>
            </Card>
        );
    }
    
    const Menu = (props) => {
        
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });
    
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );

    }
    
{/* 

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

*/}
    

export default Menu;