/* eslint-env mocha */
import { expect } from 'chai'
import React from 'react'
import Search from '../js/Search'
import ShowCard from '../js/ShowCard'
import { shows } from '../public/data'
import { shallow, mount } from 'enzyme'
import { store, rootReducer } from '../js/Store'

xdescribe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>not netflix</h1>)).to.be.true
  })

  it('should render all the shows that there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/init' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'state1' }, { type: 'setSearchTerm', value: 'state2' })
    expect(state).to.deep.equal({ searchTerm: 'state2' })
  })
})
