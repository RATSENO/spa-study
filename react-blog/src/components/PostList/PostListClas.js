import React from 'react';

class PostListClas extends React.Component{

    constructor(){
        super();
        this.state = {
            posts : this.props.posts,
            clicked : false
        }

        this.handleGoDetail = this.handleGoDetail.bind(this);
        this.handleGoModal = this.handleGoModal.bind(this);
    };

    handleGoDetail = (e) => {
        e.preventDefault();
        console.log('상세클릭');
        this.setState({
            clicked : !this.state.clicked
        });
    };

    handleGoModal = (e) => {
        console.log("modal");
        var test = document.getElementById("exampleModal");
        console.log(test);
    };

    render(){
        return(
            <div>
                <div className="row mb-2">
                    {
                        this.state.posts.map((item, key) =>
                            <div className="col-md-6" key={item.id}>
                                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-primary">{item.id}</strong>
                                        <h3 className="mb-0">{item.name}</h3>
                                        <div className="mb-1 text-muted">{item.phone}</div>
                                        <p className="card-text mb-auto">{item.address.street} {item.address.suite} {item.address.city}</p>
                                        <div className="row">
                                            <div className="col-sm">
                                                <a href="#" onClick={this.handleGoDetail} className="stretched-link">상세</a>
                                            </div>
                                            <div className="col-sm">
                                                <button type="button" onClick={this.handleGoModal} className="btn btn-primary">상세보기</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-disabled="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                    </div>
                                </div>
                                <div>
                                    {this.state.clicked && (
                                        <div>
                                            <p>{item.id}</p>
                                            <p>{item.name}</p>
                                            <p>{item.username}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        );
    };
}

export default PostListClas;