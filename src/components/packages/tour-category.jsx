import React , {Component} from 'react';
class TourCategories extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.path = props.path;
        this.imagePath = "feature flex_feature_item ";
    }
        render() {
            return (
                <a href="#link1" >
                    <div class={this.imagePath}>
                        <h3><a href={this.path}>{this.title}</a></h3>
                    </div>
                </a>
            );
        }

}
export default TourCategories;