import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    
    {/*props란 properties의 줄임말로서 컴포넌트 속성을 설정. 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정. */}
    {/*const {name, children} = props; 
    비구조화 할당 문법을 통한 props 내부 값 추출. */}
    return (
        <div>안녕하세요. 제 이름은 {name}입니다!<br/>
        children 값은 {children}입니다!<br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다!
        </div>
    );
   
};

MyComponent.defaultProps = {
    name: '기본이름'
};

/*컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 propTypes 사용. */
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

/*다른 파일에서 이 파일을 import할 때 위에서 선언한 mycomponent 클래스를 불러옴. */
export default MyComponent;