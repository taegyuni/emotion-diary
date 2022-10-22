const MyButton = ({ text, type, onClick }) => {
  // 이상한 타입이 들어와도 default 타입으로 지정해줌
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <button
      className={['MyButton', `MyButton_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;
