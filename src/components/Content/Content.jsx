import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <main className="main-content">

                <div className="content">
                    <img src="contentimg.png" alt="" />
                    <div className="profile flex-box">
                        <img src="" alt="img-profile" />
                        <ul>
                            <li>Name + Last Name</li>
                            <li>Date birthday</li>
                            <li>Number phone</li>
                        </ul>
                    </div>

                    <div className="posts">
                        <div className="post1">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis earum minima
                                praesentium nulla iure reprehenderit numquam quidem ut veritatis, vero voluptatem nemo
                                facere
                                natus at qui dignissimos! Voluptatem, deserunt.
                      </p>
                        </div>
                        <div className="post2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, asperiores laudantium
                                placeat
                                quasi illum quae, suscipit maiores assumenda similique minima aspernatur earum at ipsum
                                iusto
                                iste est expedita? Necessitatibus, temporibus?
                  </p>
                        </div>
                    </div>

                </div>

            </main>
        );
    }
}

export default Content;