export default {
  common: {
    select_default: 'Please select',
    input_default: 'Please enter',
    date_pick_default: 'Choose date',
    no_empty: 'Can not be empty',
    no_data: 'No data',
    more: 'More',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    req_time_out: 'Request time out',
    dialog_title: 'Tips',
    common_error_message: 'Ah ~ the network is absent-minded',
    placehold_tips: 'Coming soon...',
    is_confirm_oper: 'Is confirm {0} operation',
    success: 'Success',
    fail: 'Fail',
    yes: 'Yes',
    no: 'NO',
    confirm: 'Confirm',
    cancel: 'Cancel',
    retry: 'Retry',
    currency_symbol: '￥',
    sign_in_first: 'Please sign in',
    firstPage: 'First',
    lastPage: 'Last',
    show: 'Show',
    selected: 'select',
    records: 'records',
    location: 'Location',
    peer: 'Peer',
    confirmations: 'confirmations'
  },
  page_404: {
    copyright: 'Copyright',
    company: 'TianJi',
    tips: 'Please check whether the url you entered is correct, please click the following button to return to the home page or send an error report',
    back_home: 'Back home-page',
    msg_content: 'This page can not going...'
  },
  header: {
    title: 'Filecoin123',
    home: 'Home',
    blockchain: 'Blockchain',
    data: 'Data',
    map: 'Map',
    input_hint: 'Please enter address/message-id/block-height/block-hash',
    login: 'Sign in',
    register: 'Sign up',
    lang_zh: '中文',
    lang_en: 'EN',
    personal_center: 'Personal center',
    logout: 'Logout',
    no_match: 'No match result'
  },
  footer: {
    title: 'Filecoin123',
    copyright: 'Copyright© 2019-2020 grandhelmsman',
    case_number: '赣ICP备19007140号',
    // case_number: 'Case number 19007140',
    powered_by: 'Powered by grandhelmsman',
    project_description: 'Project description',
    filecoin_official_website: 'Filecoin official website',
    filecoin_manual: 'Filecoin manual',
    wallet: 'Filecoin wallet',
    official_browser: 'Official browser',
    blockchain: 'Blockchain',
    block: 'Block',
    message: 'Message',
    account: 'Account',
    data: 'Data',
    miner_data: 'Miner data',
    coin_data: 'Token data',
    partner: 'Partner',
    dapponline: 'DappOnline',
    grandhelmsman: 'Grandhelmsman',
    contact_us: 'Contact us',
    help_email: 'If you need help, please send an email to',
    email_address: 'contact@Filecoin123.cn'
  },
  time: {
    year: '{0} years ago',
    month: '{0} months ago',
    day: '{0} days ago',
    hour: '{0} hours ago',
    minute: '{0} min ago',
    second: '{0}s ago',
    minute_second: '{0}min {1}s ago',
    hour_minute: '{0}hours {1}min ago',
    day_hour: '{0}days {1}hours ago',
    hour_minute_second: '{0}hours {1}min {2}s ago',
    day_hour_minute: '{0}days {1}hours {2}min ago'
  },
  app_constant: {
    status: {
      success: 'Success',
      fail: 'Fail'
    },
    message_method: {
      method_all: 'AllMethod',
      method_0: 'Transfer',
      method_1: 'Constructor',
      method_2: 'ControlAddresses',
      method_4: 'ChangePeerID',
      method_5: 'SubmitWindowedPoSt',
      method_6: 'PreCommitSector',
      method_7: 'ProveCommitSector',
      method_14: 'AddLockedFund',
      method_16: 'WithdrawBalance',
      method_18: 'ChangeMultiaddrs'
    },
    account_type: {
      normal: 'Account',
      owner: 'Account (owner)',
      miner: 'Storage Miner',
      wallet: 'Account (wallet)'
    }
  },
  home: {
    lastest_block: 'Latest block',
    lastest_block_height: 'Latest block height',
    lastest_block_height_description: 'Current latest packaged block number',
    computing_power_total: 'Computing power',
    computing_power_total_description: 'Latest total network power',
    miner_total: 'Account count',
    miner_total_description: 'Total number of accounts in the entire network',
    available_total: 'Available (FIL)',
    available_total_description: 'Is circulating on the network, does not include the number of tokens frozen in mortgage',
    in_circulation: 'In circulation (FIL)',
    in_circulation_description: 'The number of tokens in circulation on the network',
    mortgage: 'Mortgage (FIL)',
    mortgage_description: 'The number of tokens in the frozen part of the mortgage on the network',
    lastest_block_time: 'Latest block time',
    lastest_block_time_descriptin: 'The time interval between the latest block and the previous block',
    average_time: 'Avg block time',
    average_time_description: 'Average block time in the past 24 hours',
    lastest_block_reward: 'Latest reward',
    lastest_block_reward_description: 'The block reward value generated by the latest block',
    average_gas_price: 'Avg gas price',
    average_gas_price_description: 'Average gas price in the last 24 hours',
    average_message_count: 'Avg message count',
    average_message_count_description: 'Average number of messages per block height in the past 24 hours',
    average_message_size: 'Avg message size',
    average_message_size_description: 'Average message size in the last 24 hours',
    miner_no: 'Miner',
    block_rate: 'Block R.',
    block_height: 'Block height',
    all_block: 'All block',
    miner: 'Miner',
    block_hash: 'Block hash',
    reward: 'Reward',
    message_count: '{0} msg',
    lastest_message: 'Latest messages',
    all_message: 'All message',
    sender: 'From',
    receiver: 'To',
    miner_ranking: 'Miner ranking',
    miner_ranking_description: `
    <li>Effective power: refers to the computing power stored by the miner after accessing the order, including both effective storage and storage filled by itself</li>
    <li>Proportion of effective power: the percentage of effective computing power of miners in the effective computing power of the entire network</li>
    <li>Blocks: the number of blocks packed by miners</li>
    <li>Proportion of blocks: the proportion of the number of blocks packed by miners to the total number of blocks in the entire network</li>
    <li>Mining revenue: the total number of block rewards obtained by miners</li>
    <li>Proportion of mining revenue: the percentage of the total block rewards obtained by miners in the block rewards of the entire network</li>`,
    all_miner: 'All miner',
    ranking: 'Ranking',
    miner_node: 'Miner node',
    team: 'Team',
    effective_computing_power: 'Effective power/Proportion',
    // block_count: 'Blocks/Proportion',
    // income: 'Mining revenue/Proportion',
    block_count: '24h Reward',
    income: '24h Mining Effciency',
    status: {
      success: 'Success',
      pending: 'Pending',
      fail: 'Fail'
    }
  },
  common_list: {
    block_list: 'Blocks',
    message_list: 'Messages',
    account_list: 'Accounts',
    tooltips: {
      miner: 'Miner: {0}',
      height: 'Height: {0}',
      time: 'Time: {0}',
      hash: 'Hash: {0}'
    },
    legend: {
      empty_block: 'Empty Block',
      min_ticket_block: 'Min Ticket Block',
      other_block: 'Other Block'
    },
    block: {
      type_empty: 'Null Block',
      type_min_block: 'Min Ticket Block',
      type_other: 'Other Block',
      list_title: 'Blocks',
      list_total: '<span>{0}</span> blocks',
      block_height: 'Height',
      hash: 'Block Hash',
      time: 'Time',
      message: 'Messages',
      reward: 'Reward',
      miner: 'Miner'
    },
    message: {
      list_title: 'Messages',
      list_total: '<span>{0}</span> messages',
      hash: 'Message ID',
      block_height: 'Height',
      time: 'Time',
      sender: 'From',
      receiver: 'To',
      value: 'Value',
      status: 'Status',
      type: 'Method'
    },
    account: {
      list_title: 'Accounts',
      list_total: '<span>{0}</span> accounts',
      index: 'Index',
      address: 'Address',
      type: 'Type',
      balance: 'Balance'
    }
  },
  block_height: {
    title: 'Block Height',
    block_height: 'Height',
    block_hash: 'Block Hash',
    time: 'Time',
    message: 'Message',
    reward: 'Reward',
    miner: 'Miner'
  },
  block_detail: {
    title: 'Block Detail',
    hash: 'Block Hash',
    block_height: 'Block Height',
    time: 'Time',
    block_size: 'Block Size',
    message_count: 'Message Count',
    miner: 'Miner',
    reward: 'Reward',
    parent_hash: 'Parent Hash',
    parent_weight: 'Parent Weight',
    ticket: 'Ticket',
    state_root: 'State Root',
    message: {
      title: 'Messages',
      total: '{0} messages',
      hash: 'Message Hash',
      height: 'Block Height',
      time: 'Time',
      sender: 'From',
      receiver: 'To',
      value: 'Value',
      status: 'Status',
      type: 'Method'
    }
  },
  message_detail: {
    title: 'Message Detail',
    message_hash: 'Message Hash',
    block_height: 'Block Height',
    block: 'Block',
    time: 'Time',
    sender: 'From',
    receiver: 'To',
    value: 'Value',
    status: 'Status',
    method: 'Method',
    random: 'Random',
    params: 'Params'
  },
  account_detail: {
    title: 'Account Detail',
    address: 'Address',
    type: 'Type',
    balance: 'Balance',
    code: 'Cid',
    random: 'Random',
    owner: 'Owner',
    peer_id: 'Peer ID',
    raw_power: 'Raw Power',
    quality_power: 'Quality Power',
    sector_size: 'Sector Size',
    sector_number: 'Sector Number',
    proving_sector_number: 'Proving Sector Number',
    fail_number: 'Fail Number',
    miner_list: 'Miners',
    tabs: {
      message: 'Message',
      block: 'Block'
    },
    message: {
      title: 'Messages',
      total: '{0} messages',
      hash: 'Message Hash',
      height: 'Block Height',
      time: 'Time',
      sender: 'From',
      receiver: 'To',
      value: 'Value',
      status: 'Status',
      type: 'Type'
    },
    block: {
      title: 'Blocks',
      total: '{0} blocks ({1} FIL)',
      height: 'Block Height',
      hash: 'Block Hash',
      time: 'Time',
      messages: 'Message',
      reward: 'Reward',
      miner: 'Miner'
    }
  }
}
