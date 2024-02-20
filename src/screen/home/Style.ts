import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  //common style
  rowDir: {
    flexDirection: 'row',
  },
  colorGray: {
    color: '#CCC',
  },
  ml8: {
    marginLeft: 8,
  },
  mr8: {
    marginRight: 8,
  },
  mt8: {
    marginTop: 8,
  },
  mb8: {
    marginBottom: 8,
  },
  mt16: {
    marginTop: 16,
  },
  //HomePage
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    width: '100%',
    height: '100%',
  },

  //ToolBar
  containerToolBar: {
    paddingVertical: 16,
  },
  toolbar: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconMenu: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    objectFit: 'fill',
  },
  subTitle: {
    fontSize: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: '500',
  },

  //SearchUI
  containerSearch: {
    gap: 12,
  },
  input: {
    backgroundColor: '#f0eff6',
    paddingHorizontal: 10,
    fontSize: 14,
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 12,
  },
  btnSearch: {
    width: 45,
    height: 45,
    backgroundColor: '#f07869',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSearch: {
    width: 20,
    height: 20,
    tintColor: '#fdfcfe',
  },
  containerFilter: {
    marginTop: 8,
    gap: 8,
  },
  radioBtn: {
    borderWidth: 0.8,
    borderColor: '#CCC',
    borderRadius: 10000,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  btnSelected: {
    borderColor: 'black',
    color: 'black',
  },

  //PopualarJobs
  containerTitlePopular: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePopular: {
    fontSize: 20,
  },
  containerItemPopular: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    width: 240,
  },
  titleItemPopular: {
    fontSize: 16,
  },
  mainTitleItemPopular: {
    fontSize: 20,
    marginTop: 8,
  },
  bgLightGray: {
    backgroundColor: '#f0eff6',
  },

  //NearbyJobs
  containerItemNearby: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 8,
    gap: 20,
  },
  titleItemNearby: {
    fontSize: 16,
    fontWeight: '600',
  },
  typeItemNearby: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
});
