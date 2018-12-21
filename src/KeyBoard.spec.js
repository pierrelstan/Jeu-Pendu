import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import KeyBoard from './components/KeyBoard';
import sinon from 'sinon';


describe('<KeyBoard />', () => {
    it('should trigger its `onClick` prop when clicked', ()=> {
        const onClick = sinon.spy()
        const wrapper = shallow(<KeyBoard letter="A" index={0} onClick={onClick} feedback="justMatched" /> )

        wrapper.simulate('click');
        expect(onClick).to.have.been.calledWith(0)
    })


})