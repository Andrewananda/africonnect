import React, {Component} from 'react';
import {StyleSheet,Button} from 'react-native';
import {Form, Item, Input, Label, Picker, Icon,Card, View} from 'native-base';

export default class LoanRequestFormComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <View>
                <Card style={{ borderRadius: 10 }} >
                    <Form>
                        <Item floatingLabel style={loanRequestsStyling.inputStyling}>
                            <Label style={{fontFamily: 'serif',}}>Preferred Loan Amount</Label>
                            <Input keyboardType="numeric" />
                        </Item>
                        <Item picker style={loanRequestsStyling.inputStyling}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined,fontFamily: 'serif', }}
                                placeholder="Select Payment Duration"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}>
                                <Picker.Item label="Payment Duration" value="key0" />
                                <Picker.Item label="One Week-1120" value="key1" />
                                <Picker.Item label="Two Weeks-1140" value="key2" />
                            </Picker>
                        </Item>
                        <Item picker style={loanRequestsStyling.inputStyling}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, fontFamily: 'serif', }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}>
                                <Picker.Item label="Intended Loan Purpose " value="key0" />
                                <Picker.Item label="Buy Stock " value="key1" />
                                <Picker.Item label="Pay Rent" value="key2" />
                                <Picker.Item label="Pay Employees" value="key3" />
                            </Picker>
                        </Item>

                        <View style={loanRequestsStyling.inputStyling}>
                            <Button
                                title="Request Loan"
                                color={"#ffc94f"}
                                onPress={() => alert('Your Loan Is being Processed We Will Get Back To You!')}
                            />
                        </View>
                    </Form>
                </Card>
            </View>
        );
    }

}
const loanRequestsStyling = StyleSheet.create({
    buttonPay: {
        borderRadius: 4,
        elevation:1,
        width: 300,
        height:30,
        textAlign:'center',
        backgroundColor:'#ffc94f',
        color:'#ffffff',
        justifyContent: 'center',
    },
    inputStyling: {
        padding: 10,
    }
})