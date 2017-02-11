import React, {Component} from 'react';

import './loadMore.scss';

const LoadMore = (props) => {
    return <div className="loadmore">
        <a id="loadMore" data-android={props.androidUrl} data-apple={props.appleUrl}>查看更多精华评论</a>
    </div>
};

export default LoadMore