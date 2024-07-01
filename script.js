const XLSX = require('xlsx');
const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Read XLSX file
const workbook = XLSX.readFile('path/to/your/file.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Function to insert data into Supabase
const insertData = async (data) => {
  const { data: existingData, error: existingError } = await supabase
    .from('All Properties')
    .select('property_id')
    .in('property_id', data.map(item => item.property_id));

  if (existingError) {
    console.error('Error fetching existing data:', existingError);
    return;
  }

  const existingIds = new Set(existingData.map(item => item.property_id));
  const filteredData = data.filter(item => !existingIds.has(item.property_id));

  if (filteredData.length > 0) {
    const { error: insertError } = await supabase
      .from('All Properties')
      .insert(filteredData);

    if (insertError) {
      console.error('Error inserting data:', insertError);
    } else {
      console.log('Data inserted successfully');
    }
  } else {
    console.log('No new data to insert');
  }
};

// Prepare data for insertion
const data = worksheet.map(row => ({
  property_id: row['property_id'],
  lead_id: row['lead_id'],
  property_address_full: row['property_address_full'],
  property_address_line_1: row['property_address_line_1'],
  property_address_line_2: row['property_address_line_2'],
  property_address_city: row['property_address_city'],
  property_address_state: row['property_address_state'],
  property_address_zipcode: row['property_address_zipcode'],
  property_lat: row['property_lat'],
  property_lng: row['property_lng'],
  property_type: row['property_type'],
  property_status: row['property_status'],
  property_value: row['property_value'],
  owner_name: row['owner_name'],
  owner_contact: row['owner_contact'],
  owner_email: row['owner_email'],
  date_added: row['date_added'],
  last_updated: row['last_updated'],
  contact_1_name: row['contact_1_name'],
  contact_1_phone: row['contact_1_phone'],
  contact_1_email: row['contact_1_email'],
  contact_2_name: row['contact_2_name'],
  contact_2_phone: row['contact_2_phone'],
  contact_2_email: row['contact_2_email'],
  contact_3_name: row['contact_3_name'],
  contact_3_phone: row['contact_3_phone'],
  contact_3_email: row['contact_3_email'],
  contact_4_name: row['contact_4_name'],
  contact_4_phone: row['contact_4_phone'],
  contact_4_email: row['contact_4_email'],
  contact_5_name: row['contact_5_name'],
  contact_5_phone: row['contact_5_phone'],
  contact_5_email: row['contact_5_email'],
  contact_6_name: row['contact_6_name'],
  contact_6_phone: row['contact_6_phone'],
  contact_6_email: row['contact_6_email'],
  contact_7_name: row['contact_7_name'],
  contact_7_phone: row['contact_7_phone'],
  contact_7_email: row['contact_7_email'],
  contact_8_name: row['contact_8_name'],
  contact_8_phone: row['contact_8_phone'],
  contact_8_email: row['contact_8_email'],
  contact_9_name: row['contact_9_name'],
  contact_9_phone: row['contact_9_phone'],
  contact_9_email: row['contact_9_email'],
  contact_10_name: row['contact_10_name'],
  contact_10_phone: row['contact_10_phone'],
  contact_10_email: row['contact_10_email'],
  contact_11_name: row['contact_11_name'],
  contact_11_phone: row['contact_11_phone'],
  contact_11_email: row['contact_11_email'],
  contact_12_name: row['contact_12_name'],
  contact_12_phone: row['contact_12_phone'],
  contact_12_email: row['contact_12_email'],
  contact_13_name: row['contact_13_name'],
  contact_13_phone: row['contact_13_phone'],
  contact_13_email: row['contact_13_email'],
  contact_14_name: row['contact_14_name'],
  contact_14_phone: row['contact_14_phone'],
  contact_14_email: row['contact_14_email'],
  contact_15_name: row['contact_15_name'],
  contact_15_phone: row['contact_15_phone'],
  contact_15_email: row['contact_15_email'],
  contact_16_name: row['contact_16_name'],
  contact_16_phone: row['contact_16_phone'],
  contact_16_email: row['contact_16_email'],
  contact_17_name: row['contact_17_name'],
  contact_17_phone: row['contact_17_phone'],
  contact_17_email: row['contact_17_email'],
  contact_18_name: row['contact_18_name'],
  contact_18_phone: row['contact_18_phone'],
  contact_18_email: row['contact_18_email'],
  contact_19_name: row['contact_19_name'],
  contact_19_phone: row['contact_19_phone'],
  contact_19_email: row['contact_19_email'],
  contact_20_name: row['contact_20_name'],
  contact_20_phone: row['contact_20_phone'],
  contact_20_email: row['contact_20_email'],
  // Add any additional columns here
}));

// Insert data into Supabase
insertData(data);
