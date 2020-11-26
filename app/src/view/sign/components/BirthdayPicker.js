import React from 'react';
import DatePicker from 'react-native-date-picker';
import { inject, observer } from 'mobx-react';
import { Text } from 'react-native';

@inject('signUpBasicInfoStore')
@observer
class BirthdayPicker extends React.Component {
  state = { date: new Date() };

  getParsedDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // January is 0!

    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    date = `${yyyy}.${mm}.${dd}`;
    return date.toString();
  };

  render() {
    return (
      <>
        <DatePicker
          date={this.state.date}
          onDateChange={(newDate) => {
            this.setState({ date: newDate });
            this.props.signUpBasicInfoStore.birthdayChanged(
              this.getParsedDate(this.state.date).toString()
            );
          }}
          androidVariant="iosClone"
          mode="date"
        />
        {/* <Text>{this.getParsedDate(this.state.date).toString()}</Text> */}
      </>
    );
  }
}

export default BirthdayPicker;
