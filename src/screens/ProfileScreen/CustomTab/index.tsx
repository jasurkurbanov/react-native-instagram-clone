import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Grid, List} from './Tabs';

const data2 = [
  {
    id: 1,
    src: 'http://placehold.it/200x200?text=1',
  },
  {
    id: 2,
    src: 'http://placehold.it/200x200?text=2',
  },
  {
    id: 3,
    src: 'http://placehold.it/200x200?text=3',
  },
  {
    id: 4,
    src: 'http://placehold.it/200x200?text=4',
  },
  {
    id: 5,
    src: 'http://placehold.it/200x200?text=5',
  },
  {
    id: 6,
    src: 'http://placehold.it/200x200?text=6',
  },
];

interface CustomTabProps {
  data?: Array<Object>;
}
const CustomTab = memo<CustomTabProps>(({data}) => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  const {tabContainerStyle, tabStyle, tabTextStyle} = styles;
  return (
    <>
      <SegmentedControlTab
        values={['⊞', '♡']}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={tabContainerStyle}
        tabStyle={tabStyle}
        tabTextStyle={tabTextStyle}
        activeTabStyle={{color: 'white', backgroundColor: '#000'}}
        activeTabTextStyle={{color: 'white'}}
      />
      {customStyleIndex === 0 && <Grid />}
      {customStyleIndex === 1 && <List />}
    </>
  );
});

const styles = StyleSheet.create({
  tabContainerStyle: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    borderWidth: 0,
    borderColor: 'white',
  },
  tabStyle: {borderWidth: 0.5, borderColor: 'black'},
  tabTextStyle: {
    fontSize: 24,
    color: 'black',
    margin: 2,
    fontWeight: 'bold',
  },
  scene: {
    padding: 20,
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
});

export {CustomTab};
