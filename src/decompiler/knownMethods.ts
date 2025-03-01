export const knownMethods: { [key: number]: string } = {
    [0]: 'recv_internal',
    [-1]: 'recv_external',
    [-2]: 'run_ticktock',
    [66763]: 'get_full_domain',
    [68445]: 'get_nft_content',
    [69506]: 'get_telemint_token_name',
    [72748]: 'get_sale_data',
    [76407]: 'is_plugin_installed',
    [78748]: 'get_public_key',
    [80293]: 'get_owner',
    [80697]: 'get_auction_info',
    [81467]: 'get_subwallet_id',
    [82320]: 'get_version',
    [83229]: 'owner',
    [85143]: 'seqno',
    [85719]: 'royalty_params',
    [90228]: 'get_editor',
    [91689]: 'get_marketplace_address',
    [92067]: 'get_nft_address_by_index',
    [93270]: 'get_reveal_data',
    [97026]: 'get_wallet_data',
    [102351]: 'get_nft_data',
    [102491]: 'get_collection_data',
    [103289]: 'get_wallet_address',
    [106029]: 'get_jetton_data',
    [107279]: 'get_offer_data',
    [107653]: 'get_plugin_list',
    [110449]: 'get_is_closed',
    [113617]: 'supported_interfaces',
    [116695]: 'get_reveal_mode',
    [118054]: 'get_username',
    [122498]: 'get_telemint_auction_state',
    [123660]: 'dnsresolve',
    [128411]: 'get_royalty_params',
    [129619]: 'get_telemint_auction_config',
}