"use client"
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      padding : 20,
      justifyContent : 'center'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

const GeneratePDF = () => {

  const consequence = useSelector(state => state.consequenceSlice)
  const inflow = consequence.cashInflow;
  const outflow = consequence.cashOutflow;

  let status
  let message1
  let message2
  if(inflow === outflow){
      status = "Neutral"
      message1 = "Your business is not making a profit or loss in any way."
      message2 = "You can manage this by looking for ways to increase your cash coming in or to decrease your cash going out."
  } else if (inflow > outflow) {
      status = "Positive"
      message1 = "Your business is bringing in more money than it is spending."
      message2 = "Continue forecasting your cash flow month to month."
  } else {
      status = "Negative"
      message1 = "Your business is spending more money than it is bringing in."
      message2 = "You can manage this by looking for ways to increase your cash coming in or to decrease your cash going out."
  } 

      
      const MyDocument = () => (
        <Document>
          <Page size="A4" style={styles.page}>
              <View style={{display : 'flex', flexDirection : 'column', padding : 10,}}>
                  <Text style={{textAlign : "center"}}>{status} Cash Flow</Text>
                  <Text style={{marginTop : 5}}>{message1}</Text>
                  <Text>{message2}</Text>

              </View>
          </Page>
        </Document>
      );

    return (<div>

<div className="hidden">
            <PDFDownloadLink document={<MyDocument />} fileName="cash-flow.pdf" id="download-pdf">
            </PDFDownloadLink>
          </div> 

        <div className="flex justify-center items-center text-[#6b7177] mt-4 font-bold underline hover:no-underline cursor-pointer text-center"
        onClick={() => document.getElementById('download-pdf').click()}
        >Download this financial worksheet template.</div>
    </div>
)}

export default GeneratePDF;