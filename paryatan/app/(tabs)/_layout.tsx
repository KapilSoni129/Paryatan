import React from 'react';
import { Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  logo: any;
  color: string;
}) {
  return (
    <FontAwesome size={28} style={{ marginBottom: -3 }}>
      <Image source={props.logo} style={{ width: 20, height: 20, marginTop: 3 }} />
    </FontAwesome>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabIcons = {
    index: require('../../assets/images/Navbar/Home.png'),
    two: require('../../assets/images/Navbar/Vector.png'),
    three: require('../../assets/images/Navbar/Group.png'),
    four: require('../../assets/images/Navbar/Group129.png'),
    five: require('../../assets/images/Navbar/Chat_alt_2.png'),
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: 'white', // Set white background for tabs
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" logo={tabIcons.index} color={color} />,
          title: '', // Hide the title
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" logo={tabIcons.two} color={color} />,
          title: '', // Hide the title
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" logo={tabIcons.three} color={color} />,
          title: '', // Hide the title
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" logo={tabIcons.four} color={color} />,
          title: '', // Hide the title
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" logo={tabIcons.five} color={color} />,
          title: '', // Hide the title
        }}
      />
    </Tabs>
  );
}