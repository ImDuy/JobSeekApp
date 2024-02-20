import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  //common
  secondaryColor: {
    color: '#2a204a',
  },
  fontSemiBold: {
    fontWeight: '500',
  },
  rowDir: {
    flexDirection: 'row',
  },
  colorGray: {
    color: 'gray',
  },
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  mt8: {
    marginTop: 8,
  },
  p16: {
    padding: 16,
  },

  //DetailPage
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,

    width: '100%',
    height: '100%',
  },

  //Header
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btn: {
    backgroundColor: '#ebebf2',
    padding: 8,
    borderRadius: 12,
  },
  profileContainer: {
    alignItems: 'center',
  },
  companyLogo: {
    width: 100,
    height: 100,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  icon20: {
    width: 20,
    height: 20,
  },

  //Content
  contentTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentTypeBtn: {
    backgroundColor: '#ebebf2',
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 16,
  },
  btnSelected: {
    backgroundColor: '#2f2650',
  },
  textSelected: {
    color: 'white',
  },
  contentItemContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
  },
  itemTitle: {
    color: '#2f2650',
    fontSize: 20,
    fontWeight: '500',
  },

  //BottomApplyBtn
  bottomContainer: {
    flexDirection: 'row',
    gap: 20,
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  heartBtn: {
    borderWidth: 2,
    borderColor: '#ff7656',
    borderRadius: 16,
    padding: 14,
  },
  heartIcon: {
    width: 20,
    height: 20,
    tintColor: '#ff7656',
  },
  applyBtn: {
    flexGrow: 1,
    backgroundColor: '#ff7656',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
