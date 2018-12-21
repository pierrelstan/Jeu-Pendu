import React from "react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from "./App";
import GuesseCount from "./components/Guesse";


describe("<App />", ()=>{
    it('render without crashing', () => {
        const wrapper = shallow(<App />)

        expect(wrapper).to.contain(<GuesseCount guesses={0} />)
    })

    it('has 26 letter', ()=> {
        const wrapper = shallow(<App />)

        expect(wrapper.find('KeyBoard')).to.have.length(26)
    })
   
})
