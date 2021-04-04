function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        { onclick : () => setLiked(!liked)},
        text,
    );
}
const domContainer = document.getElementById('root');
ReactDom.render(React.createElement(LikeButton), domContainer);