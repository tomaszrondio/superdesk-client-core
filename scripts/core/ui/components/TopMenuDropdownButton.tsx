import React from 'react';

export class TopMenuDropdownButton extends React.PureComponent<{onClick: () => void; active: boolean}> {
    render() {
        const {onClick, active} = this.props;

        return (
            <button onClick={onClick} style={{
                background: active ? '#F8F8F8' : '#3C3C3C',
                color: active ? '#000' : '#fff',
                paddingLeft: 10,
                paddingRight: 10,
                zIndex: 2, // so button is on top of dropdown top shadow
            }}>
                {this.props.children}
            </button>
        );
    }
}
