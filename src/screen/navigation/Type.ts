import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PAGE} from '../../common/Const';
import {RouteProp} from '@react-navigation/native';

// Typecheck for root navigation
export type RootParams = {
  Home: undefined;
  Detail: {
    employer_logo: string;
    job_title: string;
    job_country: string;
    job_highlights: {
      Qualifications: string[];
      Responsibilities: string[];
      Benefits: string[];
    };
    job_publisher: string;
  };
};

//navigation Typecheck for params pushed to detail page from another page
export type DetailStackProps = NativeStackNavigationProp<
  RootParams,
  PAGE.DETAIL
>;
//navigation Typecheck for params detail page received from route
export type DetailRouteProps = RouteProp<RootParams, PAGE.DETAIL>;
